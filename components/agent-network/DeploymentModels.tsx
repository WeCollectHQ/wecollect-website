"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { ArrowUpRightIcon } from "@/assets/svgs";

import DeploymentPlatformImage from "@/assets/pngs/deployment-platform.png";

// Replace these with the actual filenames in your project
import DeploymentAgentsImage from "@/assets/pngs/deployment-agents.png";
import DeploymentHybridImage from "@/assets/pngs/deployment-hybrid.png";

const deploymentModels = [
  {
    id: "platform",
    label: "Platform Only",
    title: (
      <>
        Manage your own team with
        <br />
        WeCollect technology
      </>
    ),
    description:
      "Full platform access — form builder, GIS validation, live dashboard, automated payments. Deploy to your existing field agents immediately.",
    image: DeploymentPlatformImage,
    alt: "WeCollect platform dashboard",
    icon: "platform",
  },
  {
    id: "agents",
    label: "Platform + Our Agents",
    title: <>Deploy our trained agents</>,
    description:
      "No field team? Activate 1,700+ verified agents across 37 states within 48 hours. All managed through the same platform with full GPS tracking and QA.",
    image: DeploymentAgentsImage,
    alt: "WeCollect field agents",
    icon: "agents",
  },
  {
    id: "hybrid",
    label: "Hybrid",
    title: (
      <>
        Your team + our agents. One
        <br />
        dashboard.
      </>
    ),
    description:
      "Use your core team in priority areas. Extend with WeCollect agents wherever you need additional coverage. One unified dashboard for both.",
    image: DeploymentHybridImage,
    alt: "WeCollect agents working with a client team",
    icon: "hybrid",
  },
];

function PlatformIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#0D0D26]"
    >
      <rect
        x="4.5"
        y="3.5"
        width="21"
        height="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M15 17.5V24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 24H21" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function AgentsIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#0D0D26]"
    >
      <circle cx="11" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" />

      <circle cx="21" cy="11" r="4" stroke="currentColor" strokeWidth="1.5" />

      <path
        d="M2.5 25C3.5 19.5 6.5 17 11 17C15.5 17 18.5 19.5 19.5 25"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <path
        d="M18 19C19 17.5 20.5 17 22.5 17C26 17 28 19.5 28.5 23"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function HybridIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-[#0D0D26]"
    >
      <rect
        x="4"
        y="4"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <rect
        x="12"
        y="12"
        width="14"
        height="14"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ModelIcon({ type }: { type: string }) {
  if (type === "agents") {
    return <AgentsIcon />;
  }

  if (type === "hybrid") {
    return <HybridIcon />;
  }

  return <PlatformIcon />;
}

export function DeploymentModels() {
  const [activeModel, setActiveModel] = useState("platform");

  const currentModel =
    deploymentModels.find((model) => model.id === activeModel) ??
    deploymentModels[0];

  return (
    <section className="bg-[#F7F7FF] text-[#0D0D26]">
      <Container>
        <div
          className="
            min-h-[640px]
            py-16
            md:py-20
            lg:py-[70px]
          "
        >
          {/* HEADER */}
          <div className="text-center">
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                leading-4
                text-[#9898B3]
              "
            >
              Deployment Models
            </p>

            <h2
              className="
                mt-3
                font-merriweather
                text-[30px]
                font-bold
                leading-[1.2]
                tracking-[-1%]
                text-[#0D0D26]
                md:text-[34px]
                lg:text-[38px]
              "
            >
              Choose the model that fits.
            </h2>
          </div>

          {/* TABS */}
          <div
            className="
              mx-auto
              mt-8
              flex
              w-full
              max-w-[533px]
              border
              border-[#E3E3ED]
              bg-white
              p-[3px]
            "
          >
            {deploymentModels.map((model, index) => {
              const isActive = activeModel === model.id;

              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setActiveModel(model.id)}
                  className={`
                    flex-1
                    px-3
                    py-2.5
                    text-[11px]
                    font-medium
                    transition-colors
                    duration-200
                    ${
                      index !== deploymentModels.length - 1
                        ? "border-r border-[#E3E3ED]"
                        : ""
                    }
                    ${
                      isActive
                        ? "bg-[#C9C8F4] text-[#0D0D26]"
                        : "bg-white text-[#5D5D85] hover:bg-[#FAFAFF]"
                    }
                  `}
                >
                  {model.label}
                </button>
              );
            })}
          </div>

          {/* CONTENT */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-10
              md:flex-row
              md:items-center
              md:justify-between
              md:gap-12
              lg:mt-8
              lg:gap-[80px]
            "
          >
            {/* LEFT */}
            <div
              className="
                w-full
                max-w-[440px]
                shrink-0
                md:w-[42%]
                lg:w-[440px]
              "
            >
              {/* Icon */}
              <div className="mb-6">
                <ModelIcon type={currentModel.icon} />
              </div>

              {/* Title */}
              <h3
                className="
                  font-merriweather
                  text-[20px]
                  font-bold
                  leading-[1.25]
                  tracking-[-1%]
                  text-[#0D0D26]
                  md:text-[25px]
                  lg:text-[25px]
                "
              >
                {currentModel.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-[430px]
                  text-[14px]
                  font-medium
                  leading-[1.65]
                  text-[#6E6E98]
                  md:text-[16px]
                "
              >
                {currentModel.description}
              </p>

              {/* CTA */}
              <div className="mt-7">
                <Button
                  href="/demo"
                  variant="primary"
                  size="lg"
                  icon={<ArrowUpRightIcon />}
                  // className="shrink-0"
                >
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                relative
                w-full
                max-w-[650px]
                overflow-hidden
                md:w-[58%]
                lg:max-w-[650px]
              "
            >
              <div
                className="
                  relative
                  aspect-[1.5/1]
                  w-full
                "
              >
                <Image
                  key={currentModel.id}
                  src={currentModel.image}
                  alt={currentModel.alt}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
