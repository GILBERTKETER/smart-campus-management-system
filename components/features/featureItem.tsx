import React from "react";
import { FeatureItem as FeatureItemType } from "@/types/featureItem";

type FeatureItemProps = FeatureItemType;

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  shortDescription,
  icon,
}) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-light select-none hover:shadow hover:shadow-teal-200 p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        {icon}
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
