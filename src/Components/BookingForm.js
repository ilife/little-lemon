import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react'

const BookingForm = (props) => {
  const toast = useToast()

  const formik = useFormik({
    initialValues: {
      date: '',
      guests: '0',
      eventName: ''
    },
    onSubmit: (values) => {
      console.log(values)
      //props.onSubmit(values)

      toast({
        title: 'Table reserved.',
        description: `We've reserved a table as per your recommendation.`,
        status: 'info',
        duration: 3000,
        isClosable: true,
        position: 'top'
      })
    },
    validationSchema: Yup.object({
      date: Yup.string().required('Required'),
      guests: Yup.number().required('Required'),
      time: Yup.string().required('Required'),
      eventName: Yup.string().required('Required')
    })
  });

  return (
    <Box align='center'>
      <form>
        <Card margin='10%' w='50%'>
          <CardHeader>
            <Heading color='app.primary' fontSize='md' fontWeight='bold' pt='30px'>Reserve a table</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing='10px'>
              <FormControl>
                <FormLabel htmlFor="date">Choose date</FormLabel>
                <Input type="date" id="date" value={formik.values.date} onChange={formik.handleChange} />
                {formik.touched.date && formik.errors.date && <FormErrorMessage>{formik.errors.date}</FormErrorMessage>}
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                <Select id="time" value={formik.values.time} onChange={formik.handleChange}>
                  <option value='17:00'>17:00</option>
                  <option value='18:00'>18:00</option>
                  <option value='19:00'>19:00</option>
                  <option value='20:00'>20:00</option>
                  <option value='21:00'>21:00</option>
                  <option value='22:00'>22:00</option>
                </Select>
                {formik.touched.time && formik.errors.time && <FormErrorMessage>{formik.errors.time}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <NumberInput id="guests" min={1} max={10} value={formik.values.guests} onChange={(val) => {
                  const newValue = parseInt(val)

                  console.log(formik.values)
                  if (!Number.isNaN(newValue)) {
                    formik.setFieldValue('guests', newValue)
                  }
                }}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {formik.touched.guests && formik.errors.guests && <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="eventName">Occasion</FormLabel>
                <Select id="eventName" value={formik.values.eventName} onChange={formik.handleChange}>
                  <option value='Birthday'>Birthday</option>
                  <option value='Anniversary'>Anniversary</option>
                </Select>
                {formik.touched.eventName && formik.errors.eventName && <FormErrorMessage>{formik.errors.eventName}</FormErrorMessage>}
              </FormControl>
              <Button mt='30px' bg='app.yellow' color='app.primary' variant='ghost' fontSize='sm' fontWeight='bold' h='50' onClick={formik.handleSubmit}>
                Submit
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </form>
    </Box>
  );
};

export default BookingForm;
