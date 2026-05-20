"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Zap,
  Rocket,
  Target,
  Info,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  sliders,
  scenarios,
  derivedMetrics,
  assumptions,
  calculateMetrics,
  type Scenario,
} from "@/data/economics";

const scenarioIcons: Record<string, React.ElementType> = {
  pilot: Target,
  growth: TrendingUp,
  scale: Rocket,
};

function SliderInput({
  id,
  label,
  min,
  max,
  step,
  value,
  format,
  onChange,
}: {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  format: (v: number) => string;
  onChange: (id: string, value: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="text-sm font-semibold tabular-nums text-sozo-blue">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(id, Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-muted accent-sozo-blue
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sozo-blue [&::-webkit-slider-thumb]:shadow-sm
          [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
          [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:bg-sozo-blue [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white"
      />
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  highlight,
  index,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  index: number;
}) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.6, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
    >
      <Card
        className={
          highlight
            ? "ring-1 ring-sozo-blue/20 bg-sozo-blue/[0.03]"
            : undefined
        }
      >
        <CardContent className="px-4 py-4 sm:px-5">
          <p className="text-xs font-medium text-muted-foreground mb-1">
            {label}
          </p>
          <p
            className={`text-xl sm:text-2xl font-semibold tracking-tight tabular-nums ${
              highlight ? "text-sozo-blue" : "text-foreground"
            }`}
          >
            {value}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ScenarioButton({
  scenario,
  isActive,
  onClick,
}: {
  scenario: Scenario;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = scenarioIcons[scenario.id] ?? Zap;

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      onClick={onClick}
      className={`gap-1.5 h-9 rounded-lg transition-all ${
        isActive
          ? "bg-sozo-blue hover:bg-sozo-blue-hover text-white"
          : "hover:border-sozo-blue/40 hover:text-sozo-blue"
      }`}
    >
      <Icon className="h-3.5 w-3.5" />
      {scenario.label}
    </Button>
  );
}

export function ROASSliders() {
  const defaults = Object.fromEntries(
    sliders.map((s) => [s.id, s.defaultValue])
  );
  const [values, setValues] = useState<Record<string, number>>(defaults);
  const [activeScenario, setActiveScenario] = useState<string | null>(null);
  const [assumptionsOpen, setAssumptionsOpen] = useState(false);

  const handleSliderChange = useCallback((id: string, value: number) => {
    setValues((prev) => ({ ...prev, [id]: value }));
    setActiveScenario(null);
  }, []);

  const handleScenarioClick = useCallback((scenario: Scenario) => {
    setValues(scenario.values);
    setActiveScenario(scenario.id);
  }, []);

  const metrics = useMemo(() => calculateMetrics(values), [values]);

  return (
    <div className="space-y-8">
      {/* Scenario presets */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-sozo-blue" />
          <h3 className="text-sm font-medium">Quick Scenarios</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {scenarios.map((scenario) => (
            <ScenarioButton
              key={scenario.id}
              scenario={scenario}
              isActive={activeScenario === scenario.id}
              onClick={() => handleScenarioClick(scenario)}
            />
          ))}
        </div>
        <AnimatePresence>
          {activeScenario && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-xs text-muted-foreground"
            >
              {scenarios.find((s) => s.id === activeScenario)?.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Sliders */}
      <div className="space-y-6">
        {sliders.map((slider) => (
          <SliderInput
            key={slider.id}
            id={slider.id}
            label={slider.label}
            min={slider.min}
            max={slider.max}
            step={slider.step}
            value={values[slider.id]}
            format={slider.format}
            onChange={handleSliderChange}
          />
        ))}
      </div>

      {/* Output metrics */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-sozo-blue" />
          <h3 className="text-sm font-medium">Projected Returns</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {derivedMetrics.map((metric, i) => (
            <MetricCard
              key={metric.key}
              label={metric.label}
              value={metric.format(
                metrics[metric.key as keyof typeof metrics]
              )}
              highlight={metric.highlight}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Assumptions */}
      <div className="border rounded-lg">
        <button
          onClick={() => setAssumptionsOpen(!assumptionsOpen)}
          className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="flex items-center gap-2">
            <Info className="h-3.5 w-3.5" />
            Model Assumptions
          </span>
          {assumptionsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>
        <AnimatePresence>
          {assumptionsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-2">
                {assumptions.map((text, i) => (
                  <div key={i} className="flex gap-2 text-xs text-muted-foreground">
                    <Badge
                      variant="outline"
                      className="h-4 w-4 shrink-0 mt-0.5 flex items-center justify-center p-0 text-[9px]"
                    >
                      {i + 1}
                    </Badge>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
