import { useCallback, useEffect, useRef, useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({});
  const [isFormTriggered, setIsFormTriggered] = useState(false);

  const formRef = useRef({
    cardNumber: false,
    cardName: false,
    cardValidThrough: false,
    cardCVV: false,
  });

  const handleFormDataChange = useCallback((data: Record<string, string>) => {
    setFormData(data);
  }, []);

  const handleTriggerForm = useCallback((triggered: boolean) => {
    setIsFormTriggered(triggered);
  }, []);

  return { formRef, formData, handleTriggerForm, isFormTriggered, handleFormDataChange };
}
