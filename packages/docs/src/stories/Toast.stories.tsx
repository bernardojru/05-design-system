import type { Meta, StoryObj } from "@storybook/react";
import { Toast, ToastProps } from "@ignite-ui/react/src/components/Toast/.";
import { useEffect, useRef, useState } from "react";
import { Button } from "@ignite-ui/react/src/components/Button";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);

  const timerRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  );
};

export default {
  title: "Form/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Quarta-feira, 23 de Outubro às 16h",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
