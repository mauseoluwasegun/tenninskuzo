import React from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ children, className = "" }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="relative bg-background rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;