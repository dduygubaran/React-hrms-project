import React from 'react'
import JobList from '../pages/JobList'
import Categories from './Categories'
import EmployerList from '../pages/EmployerList'
import CandidateList from '../pages/CandidateList'

import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>

            <Grid>
                <Grid.Row >

                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>


                    <Grid.Column width={12}>
                        <JobList />
                    </Grid.Column>

                    <Grid.Column width={12} >
                       
                    </Grid.Column >

                    <Grid.Column width={12} >
                      
                    </Grid.Column >





                </Grid.Row>
            </Grid>

        </div>
    )
}
