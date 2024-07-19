import { useMediaQuery } from "@mui/material";
import React from "react";

export const SiteDetHierChart = ({ data = [], links = [] }) => {
  const isMobileView = useMediaQuery("(max-width: 1000px)"); // Adjust the breakpoint as per your needs

  // Render Node
  const renderNode = (node) => {
    const { id, label, x, y, icon } = node;

    const iconSize = isMobileView ? 15 : 20; // Size of the icon
    const textMargin = 2; // Margin between icon and text

    const iconX = isMobileView ? x - iconSize : x - iconSize / 2;
    const iconY = y - (iconSize + textMargin) / 1.2;
    const textX = x;
    const textY = y + (iconSize + textMargin) / 2;

    return (
      <g key={id}>
        <circle
          cx={isMobileView ? x / 2.5 : x}
          cy={y}
          r={isMobileView ? 25 : 45}
          strokeWidth={1}
          stroke={"#5072A7"}
          fill="white"
        />

        <circle
          cx={isMobileView ? x / 2.5 : x}
          cy={y}
          r={isMobileView ? 20 : 38}
          fill={"#F0F0F0"}
        />
        <image
          x={isMobileView ? iconX / 2.5 : iconX}
          y={iconY}
          width={iconSize}
          height={iconSize}
          xlinkHref={
            icon || "https://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        />
        <text
          x={isMobileView ? textX / 2.5 : textX}
          y={textY}
          textAnchor="middle"
          alignmentBaseline="hanging"
          fill={"var(--gr1)"}
          fontSize={isMobileView ? 6 : 10}
        >
          {label}
        </text>
      </g>
    );
  };
  // Render Links
  const renderLink = (link, index) => {
    const sourceNode = data.find((node) => node.id === link.source);
    const targetNode = data.find((node) => node.id === link.target);

    const startX = isMobileView ? sourceNode.x / 2.5 : sourceNode?.x;
    const startY = sourceNode.y;
    const endX = isMobileView ? targetNode.x / 2.5 : targetNode.x;
    const endY = targetNode.y;

    const centerX = (startX + endX) / 2;
    const centerY = (startY + endY) / 2;

    const angle = Math.atan2(endY - startY, endX - startX);
    const markerSize = 8;

    const arrowPath = `M0,0 L${markerSize},${
      markerSize / 3
    } L0,${markerSize} L0,0`;

    const path = `M${startX},${startY} L${endX},${endY}`;

    const animationDuration = 2; // Duration in seconds

    return (
      <g key={index}>
        <path d={path} fill="none" stroke={"#5072A7"} strokeWidth={2} />

        {/* Animate yellow circle */}
        {link?.flow && (
          <circle
            cx={centerX}
            cy={centerY}
            r={5}
            fill="gold"
            style={{
              animation: `circleAnimation-${index} ${animationDuration}s linear infinite`,
            }}
          />
        )}

        <defs>
          <marker
            id={`marker-${index}`}
            viewBox={`0 0 ${markerSize} ${markerSize}`}
            refX="0"
            refY={markerSize / 2}
            markerWidth={markerSize}
            markerHeight={markerSize}
            orient="auto"
          >
            <path d={arrowPath} fill="#5072A7" />
          </marker>
        </defs>

        {/* Define the CSS animation */}
        <style>
          {`
          @keyframes circleAnimation-${index} {
            0% {
              cx: ${endX}px;
              cy: ${endY}px;
            }
            100% {
              cx: ${startX}px;
              cy: ${startY}px;
            }
          }
        `}
        </style>
      </g>
    );
  };
  if (data?.length > 0 && links?.length > 0) {
    return (
      <svg width={"100%"} height={"500px"}>
        {links.map(renderLink)}
        {data.map(renderNode)}
      </svg>
    );
  }
};
