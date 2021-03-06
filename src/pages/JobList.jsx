import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobService from '../services/jobService'
import MenuInfo from '../layouts/MenuInfo'

export default function JobList() {

    const [jobs, setJobs] = useState([])

    useEffect(()=> {

        let jobService = new JobService()
        jobService.getJobs().then(result=>setJobs(result.data.data))
    
         }, [])

    return (
        <div>
            <MenuInfo/>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>Posititon Name</Table.HeaderCell>
                    <Table.HeaderCell>Job Description</Table.HeaderCell>
                        <Table.HeaderCell>Open Posititon</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobs.map(job => (
                            <Table.Row key={job.id}>
                                 <Table.Cell>{job.jobPosition.position}</Table.Cell>
                                <Table.Cell>{job.jobDescription}</Table.Cell>
                                <Table.Cell>{job.openPosition}</Table.Cell>
                                <Table.Cell>{job.releaseDate}</Table.Cell>
                                <Table.Cell>{job.deadline}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
