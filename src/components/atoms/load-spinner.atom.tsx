import {Center, Flex, Spinner} from "@chakra-ui/react";
import * as React from "react";

interface Props {
}

const LoadSpinner: React.FC<Props> = (props) => {
    return <Flex w="100vw" h="100vh">
        <Center w="100vw">
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>
    </Flex>
}

export default LoadSpinner;
