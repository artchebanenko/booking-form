import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import App from './App'

jest.mock('axios')

afterEach(() => {
  jest.resetAllMocks()
})

test('renders booking form', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        desktop: '//example.com/desktop.jpg',
        id: 115,
        metadata: null,
        mobile: '//example.com/mobile.jpg',
        mobileApp: null,
        text: '',
        title: 'Some title',
        url: '//example.com',
      },
    ],
  })

  global.Image = class {
    constructor() {
      setTimeout(() => {
        this.onload()
      }, 100)
    }
  }

  render(<App />)

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  await waitFor(() => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Забронировать')
  })

  expect(screen.getByTestId('wrapper')).toHaveStyle(
    'background-image: url(//example.com/desktop.jpg)',
  )
})
