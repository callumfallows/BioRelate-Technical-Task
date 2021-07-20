import * as React from 'react'
import {FormControl, FormLabel, Input, Text} from '@chakra-ui/react'

export interface IFormInput {
    id: string
    required: boolean
    label: string
    placeholder?: string
    type: string
    onChange: (e: React.FormEvent<HTMLInputElement>) => void
    error?: string
}

export default function FormInputMolecule({
                                              id,
                                              label,
                                              type,
                                              error,
                                              placeholder,
                                              onChange,
                                          }: IFormInput) {
    return (
        <FormControl marginBottom="8" id={id} isRequired>
            <FormLabel color={'midnight.100'}>{label}</FormLabel>
            <Input
                color="midnight.100"
                onChange={onChange}
                size={'lg'}
                type={type}
                placeholder={placeholder}
            />
            {error && <Text>{error}</Text>}
        </FormControl>
    )
}
