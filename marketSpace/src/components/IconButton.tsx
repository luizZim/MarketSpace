import { ComponentProps, ComponentType } from "react";
import { Button, ButtonIcon } from "@gluestack-ui/themed";


type IconButtonProps = ComponentProps<typeof Button> & {
  icon?: ComponentType<any>;
}

export function IconButton({ icon, ...rest }: IconButtonProps) {
  return (
    <Button h="$10" w="$10" borderRadius="$full" {...rest}>
      <ButtonIcon as={icon} />
    </Button>
  )
}