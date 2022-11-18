import React from 'react'
import {Container, Header, Grid,} from 'semantic-ui-react'
import { Document } from 'react-pdf/dist/cjs/entry.webpack';
import { Page } from 'react-pdf'
import TermsOfService2022 from '../assets/TermsOfService2022.pdf'

const TermsOfService2022 = () => {
  return(
    <Container fluid>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header className='header' as='h1'>Terms Of Service 2022</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>

  )
}
 export default TermsOfService2022