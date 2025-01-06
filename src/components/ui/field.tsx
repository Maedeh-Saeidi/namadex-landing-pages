import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
  children: React.ReactNode;
  invalid?: boolean;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  function Field(
    { label, children, helperText, errorText, optionalText, invalid, ...rest },
    ref
  ) {
    return (
      <FormControl isInvalid={invalid} ref={ref} {...rest}>
        {label && (
          <FormLabel>
            {label}
            <span>{optionalText}</span>
          </FormLabel>
        )}
        {children}
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
        {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
      </FormControl>
    );
  }
);
