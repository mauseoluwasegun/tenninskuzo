import React from "react";

interface TitleHeaderProps {
  title: string;
  sub: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, sub }) => {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {sub}
      </p>
    </div>
  );
};

export default TitleHeader;