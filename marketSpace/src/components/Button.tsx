import { ButtonIcon, ButtonSpinner, ButtonText, Button as GluestackButton } from "@gluestack-ui/themed";
import { isLoading } from "expo-font";
import React, { ComponentProps, ComponentType } from "react";


type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string;
  icon?: ComponentType<any>;
  isLoading?: boolean;
  textColor?: "white" | "black"
}

export function Button({ title, icon, textColor = "white", isLoading = false, ...rest }: ButtonProps) {
  return (
    <GluestackButton
      {...rest}
      w="$full"
      h="$11"
      rounded="$sm"
      disabled={isLoading}
    >
      {
        isLoading ? (<ButtonSpinner color="$white" />)
          : (
            <>
              {icon && <ButtonIcon as={icon} mr="$2" color="$gray600" />}

              <ButtonText
                fontFamily="$heading"
                color={textColor === "white" ? "$gray700" : "$gray100"}
                fontSize="$sm"
              >
                {title}
              </ButtonText>
            </>
          )}
    </GluestackButton>
  )
}