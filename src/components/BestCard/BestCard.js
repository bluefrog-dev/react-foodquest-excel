import React from 'react';
import { List, Card, Button, Modal, Header } from 'semantic-ui-react';

const BestCard = ({index, data}) => (
    <Card fluid index={index}>
        <Card.Content>
            <Card.Header>
                {data.name}#{data.phone}
                <Modal trigger={<Button color='yellow' floated='right'>선정 이유</Button>}>
                    <Modal.Header>{data.name}#{data.phone}</Modal.Header>
                    <Modal.Content>
                        <List divided relaxed>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='h3'>{data.best1store}</List.Header>
                                    <br/>
                                    <b>{data.best1menu}</b>
                                </List.Content>
                                <List.Description>
                                    "{data.best1comment}"
                                </List.Description>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='h3'>{data.best2store}</List.Header>
                                    <br/>
                                    <b>{data.best2menu}</b>
                                </List.Content>
                                <List.Description>
                                    "{data.best2comment}"
                                </List.Description>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='h3'>{data.best3store}</List.Header>
                                    <br/>
                                    <b>{data.best3menu}</b>
                                </List.Content>
                                <List.Description>
                                    "{data.best3comment}"
                                </List.Description>
                            </List.Item>
                        </List>
                    </Modal.Content>
                </Modal>
            </Card.Header>
            <Card.Meta>
                {data.age} {data.gender}
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <List divided relaxed>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            <Header size='medium'>{data.best1store}</Header>
                        </List.Header>
                        <List.Description>
                            {data.best1menu}
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            <Header size='medium'>{data.best2store}</Header>
                        </List.Header>
                        <List.Description>
                            {data.best2menu}
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header>
                            <Header size='medium'>{data.best3store}</Header>
                        </List.Header>
                        <List.Description>
                            {data.best3menu}
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Card.Content>
    </Card>
)

export default BestCard;