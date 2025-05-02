import { ButtonIcon, ButtonSpinner, ButtonText, Button as GluestackButton } from "@gluestack-ui/themed";
import React, { ComponentProps, ComponentType } from "react";


type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string;
  icon?: ComponentType<any>;
  isLoading?: boolean;
  buttonColor?: "blue" | "gray" | "black";
}

export function Button({ title, icon, buttonColor = "blue", isLoading = false, ...rest }: ButtonProps) {
  return (
    <GluestackButton
      {...rest}
      w="$full"
      h="$11"
      rounded="$sm"
      bg={
        buttonColor === "blue" ? "$lightBlue100" :
          buttonColor === "gray" ? "$gray500" : "$gray100"
      }
      $active-bg={
        buttonColor === "blue" ? "$blue100" :
          buttonColor === "gray" ? "$gray400" : "$gray200"
      }
      disabled={isLoading}
    >
      {
        isLoading ? (<ButtonSpinner color="$white" />)
          : (
            <>
              {icon && <ButtonIcon as={icon} mr="$2" color="$gray600" />}

              <ButtonText
                fontFamily="$heading"
                color={["blue", "black"].includes(buttonColor) ? "$gray700" : "$gray100"}
                fontSize="$sm"
              >
                {title}
              </ButtonText>
            </>
          )}
    </GluestackButton>
  )
}