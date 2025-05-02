import React, { useState } from "react";

import { VStack, Center, Heading, Text, ScrollView, Box } from "@gluestack-ui/themed";

import Logo from "@assets/logo.svg";
import Avatar from "@assets/Avatar.svg";
import { Eye, EyeSlash, PencilLine } from "phosphor-react-native";


import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { IconButton } from "@components/IconButton";

export function SignUp() {
  const [showPassword, setShowpassword] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="$gray600"
    >
      <VStack flex={1} bg="$gray600">
        <VStack flex={1} px="$12" mt="$16">
          <Center>
            <Logo />
            <Center >
              <Heading color="$gray100" mb="$2">Boas Vindas!</Heading>
              <Text textAlign="center" color="$gray200" fontFamily="$body" fontSize="$sm">Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
            </Center>
          </Center>

          <Center mt="$8" gap="$4" position="relative">
            <Box alignItems="center">
              <Avatar />
              <IconButton icon={PencilLine} bg="$lightBlue100" position="absolute" bottom={0} right={0} />
            </Box>

            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Telefone" />
            <Input placeholder="Senha"
              icon={showPassword ? EyeSlash : Eye}
              secureTextEntry={showPassword}
              onIconPress={() => setShowpassword(!showPassword)}
            />
            <Input placeholder="Confirmar senha"
              icon={showPassword ? EyeSlash : Eye}
              secureTextEntry={showPassword}
              onIconPress={() => setShowpassword(!showPassword)}
            />


            <Button title="Criar" mt="$2" buttonColor="black" />
          </Center>

          <Center flex={1} >
            <Text color="$gray200" fontFamily="body" fontSize="$sm" mb="$4">
              Já tem uma conta?
            </Text>

            <Button title="Ir para o login" buttonColor="gray" />
          </Center>

        </VStack>
      </VStack>
    </ScrollView>
  )
}