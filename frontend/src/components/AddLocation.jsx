import React from 'react'
import { useForm } from '@mantine/form'
import { validateString } from '../utils/common'
import { Button, Group, Select, TextInput } from '@mantine/core'
import useCountries from '../hooks/useCountries'
import Map from './Map'

const AddLocation = ({ propertyDetails, setPropertyDetails , nextStep}) => {

    const { getAll } = useCountries()
    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address,
        },
        validate: {
            country: (value) => validateString(value),
            city: (value) => validateString(value),
            address: (value) => validateString(value)
        }
    })

    const {  country,city, address } = form.values
    const handleSubmit=()=>{
     const {hasError}= form.validate()
     if(!hasError){
        setPropertyDetails((prev)=>({...prev,country,city,address}))
        nextStep()
     }
    }

    return (
        <form
         onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
         }}
        >
            <div className='flexCenter'>
                {/* left side */}
                <div className='flexCenter flex-1'>
                    {/* input */}
                    <div>
                        <Select
                            w={'100%'}
                            withAsterisk
                            label='Country'
                            clearable
                            searchable

                            data={getAll()}
                            {
                            ...form.getInputProps("country", { type: "input" })
                            }
                        />
                        <TextInput
                            w={'100%'}
                            withAsterisk
                            label='City'
                            clearable
                            {
                            ...form.getInputProps("city", { type: "input" })
                            }
                        />
                        <TextInput
                            w={'100%'}
                            withAsterisk
                            label='Address'
                            clearable
                            {
                            ...form.getInputProps("address", { type: "input" })
                            }
                        />
                    </div>
                </div>
                {/* right side */}
                <div className='flex-1'>
                    <Map address={address} city={city} country={country} />
                </div>
            </div>
            <Group justify="center" mt="xl">
             <Button type='submit'>Next step</Button>
          </Group>
        </form>
    )
}

export default AddLocation
