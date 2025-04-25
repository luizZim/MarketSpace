import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
  return (
    <Center flex={1} bg="$gray700">
      <Spinner color="$lightBlue100" />
    </Center>
  )
}