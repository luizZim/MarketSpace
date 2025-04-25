import { Input as GluestackInput, InputField, InputIcon, InputSlot } from '@gluestack-ui/themed'
import { ComponentProps, ComponentType, ReactNode } from 'react'

type Props = ComponentProps<typeof InputField> & {
  icon?: ComponentType<any>;
  iconColor?: string;
  onIconPress?: () => void;
}

export function Input({ icon: Icon, iconColor = "$gray400", onIconPress, ...rest }: Props) {
  return (
    <GluestackInput
      bg="$gray700"
      borderWidth="$0"
      h="$11"
      borderRadius="$md"
      $focus={{
        borderWidth: 1,
        borderColor: "$lightBlue100",
      }}
      shadowColor='$gray100'
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
    >
      <InputField
        bg="gray700"
        color="$gray400"
        fontFamily="$body"
        px="$4"
        {...rest}
      />

      <InputSlot pr="$3" onPress={onIconPress}>
        <InputIcon as={Icon} color={iconColor} />
      </InputSlot>
    </GluestackInput >
  )
}