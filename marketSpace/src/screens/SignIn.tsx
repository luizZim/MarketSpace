import React, { useState } from "react";
import { VStack, Center, Text, Box } from "@gluestack-ui/themed";
import { useFonts, Karla_300Light } from "@expo-google-fonts/karla";

import { Eye, EyeSlash } from "phosphor-react-native";
import LogoName from "@assets/marketspace.svg"
import LogoImg from "@assets/logo.svg"

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  const [fontsLoaded] = useFonts({ Karla_300Light });

  const [showPassword, setShowPassword] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <VStack flex={1} bg="$gray600">
      <VStack flex={1} px="$12" pb="$9">
        <Center my="$24">
          <Box mb="$5">
            <LogoImg />
          </Box>

          <Box>
            <LogoName />
          </Box>
          <Text color="$gray300" fontSize="$sm" fontFamily="Karla_300Light">Seu espaço de compra e venda</Text>
        </Center>

        <Center gap="$4">
          <Text fontSize="$sm" fontFamily="$body" color="$gray200" >Acesse sua conta</Text>
          <Input placeholder="E-mail" />
          <Input
            placeholder="Senha"
            secureTextEntry={showPassword}
            iconColor="$gray300"
            icon={showPassword ? EyeSlash : Eye}
            onIconPress={() => setShowPassword(!showPassword)}
          />
          <Button mt="$8" title="Entrar" bg="$lightBlue100" textColor="white" />
        </Center>

        <Center flex={1} >
          <Text color="$gray200" fontFamily="body" fontSize="$sm" mb="$4">
            Ainda não tem acesso?
          </Text>

          <Button title="Criar uma conta" textColor="black" bg="$gray500" />
        </Center>

      </VStack>
    </VStack>
  )
}