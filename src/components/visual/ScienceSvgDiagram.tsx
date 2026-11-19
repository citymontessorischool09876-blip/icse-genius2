import React from 'react';
import { DiagramItem } from '../../types/index.ts';
import { PhysicsSvg } from './svg/PhysicsSvg.tsx';
import { ChemistrySvg } from './svg/ChemistrySvg.tsx';
import { BiologySvg } from './svg/BiologySvg.tsx';

interface ScienceSvgDiagramProps {
  figureType: NonNullable<DiagramItem['svgFigure']>;
  className?: string;
}

export const ScienceSvgDiagram: React.FC<ScienceSvgDiagramProps> = ({
  figureType,
  className = 'w-full h-auto max-h-[340px]',
}) => {
  if (figureType.startsWith('phy_')) {
    return <PhysicsSvg figureType={figureType} className={className} />;
  }
  if (figureType.startsWith('chem_')) {
    return <ChemistrySvg figureType={figureType} className={className} />;
  }
  return <BiologySvg figureType={figureType} className={className} />;
};
