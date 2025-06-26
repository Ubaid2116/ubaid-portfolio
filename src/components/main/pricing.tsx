"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      period: "month",
      features: [
        "Access to basic features",
        "Email support",
        "Community access",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "month",
      features: [
        "All basic features",
        "Priority email support",
        "Advanced analytics",
        "Unlimited projects",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "month",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom integrations",
        "Team management",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background (similar to Hero Section) */}
      <motion.div
        className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-emerald-500/10 animate-pulse" />
      </motion.div>

      <div className="relative container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold mb-4"
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Choose a plan that suits your needs. Flexible pricing and premium features to empower your business.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-xl bg-gray-800 border ${
                plan.popular ? "border-emerald-500" : "border-gray-700"
              } shadow-lg flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray-400 text-lg">/{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="mt-auto bg-gradient-to-r from-purple-600 to-emerald-500 hover:from-purple-500 hover:to-emerald-400 text-white"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
