import { MultiStepContainer, Label, Steps, Step } from "./styles";
import { ComponentProps } from "react";

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />;
        })}
      </Steps>
    </MultiStepContainer>
  );
}

// <Steps css={{'--steps-size': size}}></Steps> : enviar props de react para o css
