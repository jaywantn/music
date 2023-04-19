// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const CustomInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      {...props}
      inputRef={ref}
      label='Birth Date'
      autoComplete='off'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Icon icon='mdi:account-outline' />
          </InputAdornment>
        )
      }}
    />
  )
})

const FormLayoutsIcons = () => {
  const [date, setDate] = useState(null)

  return (
    <Card>
      <CardHeader title='Add Student' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='First Name'
                placeholder='Leonard Carter'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Middle Name'
                placeholder='Leonard Carter'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Last Name'
                placeholder='Leonard Carter'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'
                helperText='You can use letters, numbers & periods'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:email-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type='number'
                label='Phone No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:phone' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type='number'
                label='Mobile No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:phone' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Screen Name'
                placeholder='Screen Name'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='form-layouts-tabs-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                label='Parents name'
                placeholder='Parents name'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:account-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                type='number'
                label='Parent Mobile No.'
                placeholder='+1-123-456-8790'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:phone' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                fullWidth
                type='email'
                label='Parent Email'
                placeholder='carterleonard@gmail.com'
                helperText='You can use letters, numbers & periods'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:email-outline' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
