import { Link } from 'react-router-dom'

import { Paper } from '@/components/ui/paper'

export const NotFound = () => {
  return (
    <Paper title="Nothing to see here!">
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Paper>
  )
}
