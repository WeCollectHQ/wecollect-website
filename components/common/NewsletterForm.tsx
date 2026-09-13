"use client";

import { useActionState, useEffect, useState, useRef } from "react";
import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { Button } from "@/components/common/Button";

interface NewsletterFormProps {
  formClassName?: string;
  inputClassName?: string;
  buttonVariant?: any;
  buttonSize?: any;
  buttonClassName?: string;
}

export function NewsletterForm({
  formClassName = "",
  inputClassName = "",
  buttonVariant = "primary",
  buttonSize = "md",
  buttonClassName = "",
}: NewsletterFormProps) {
  const [state, action, isPending] = useActionState(subscribeToNewsletter, null);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      setShowSuccess(true);
      formRef.current?.reset();
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <div className="w-full">
      <form action={action} ref={formRef} className={formClassName}>
        <input
          name="email"
          type="email"
          placeholder="Enter your email..."
          className={inputClassName}
          required
          disabled={isPending}
        />
        <Button 
          type="submit" 
          variant={buttonVariant} 
          size={buttonSize} 
          className={buttonClassName}
          disabled={isPending}
        >
          {isPending ? "..." : "Subscribe"}
        </Button>
      </form>
      {state?.error && <p className="text-red-500 text-[11px] mt-1.5">{state.error}</p>}
      {showSuccess && <p className="text-[#4ade80] text-[11px] mt-1.5">{state?.message}</p>}
    </div>
  );
}
