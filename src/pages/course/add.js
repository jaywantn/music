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
      <CardHeader title='Add Course' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={4}>
              <TextField fullWidth label='Course Name' placeholder='Computer Science' />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth label='Syllabus' placeholder='Syllabus' />
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
