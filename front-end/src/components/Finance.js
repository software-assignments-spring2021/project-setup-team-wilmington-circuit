import React from 'react';
import '../main.css';
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup, Collapse, Table } from 'react-bootstrap';
import "./styles/Finance.css";
const sampleData = {
    '19-20': [
        {
            'award-name': 'CAS Scholarship',
            'category': 'Scholarship',
            'accepted': true,
            'amount': 30000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Federal Work Study',
            'category': 'Work/Study',
            'accepted': true,
            'amount': 3000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Fall NY State TAP',
            'category': 'Grant',
            'accepted': true,
            'amount': 500,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Spring NY State TAP',
            'category': 'Grant',
            'accepted': true,
            'amount': 500,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Subsidized Loan 1',
            'category': 'Loan',
            'accepted': false,
            'amount': 15000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        }
    ],
    '20-21': [
        {
            'award-name': 'CAS Scholarship',
            'category': 'Scholarship',
            'accepted': true,
            'amount': 30000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Federal Work Study',
            'category': 'Work/Study',
            'accepted': false,
            'amount': 3000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Fall NY State TAP',
            'category': 'Grant',
            'accepted': true,
            'amount': 500,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        },
        {
            'award-name': 'Subsidized Loan 1',
            'category': 'Loan',
            'accepted': false,
            'amount': 15000,
            'info': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.'
        }
    ]
}

const FinanceInfo = (props) => {
    const [year, setYear] = React.useState('20-21');
    const handle20_21Click= () => setYear('20-21');
    const handle19_20Click = () => setYear('19-20');
    const [awards, showAwards] = React.useState(false);
    const handleAwardsClick = () => showAwards(!awards);	

    return (
        <div className="topbar-container">
            <a href="/finance#bursar-redirect-to-be-implemented">Access Bursar Account</a>
            <br></br><br></br>
            <div class="row"><Button>Quick-view Bursar Balance</Button></div>
            <br></br><br></br>
            <div class="row">
                <Button onClick={handleAwardsClick}>Manage Awards</Button>
                <br></br>
                <Collapse in={awards}>
                    <div className = "manageAwards">
                        <ul>
                            <li><a href="/finance#official-statement-redirect-to-be-implemented">Official Statement of Account</a></li>
                            <li><a href="/finance#financial-appeal-redirect-to-be-implemented">Financial Appeal (Current Semester)</a></li>
                            <li><a href="/finance#financial-aid-links-redirect-to-be-implemented">Financial Aid Links</a></li>
                            <br></br>
                            <li><a href="/finance#accept-decline-awards-to-be-implemented">Accept/Decline Awards</a></li>
                        </ul>
                    </div>
                </Collapse>
            </div><br></br>
            <div class="row">
            <ButtonGroup>
                <Button onClick={handle20_21Click}>20-21</Button>
                <Button onClick={handle19_20Click}>19-20</Button>
            </ButtonGroup>
            <Table>
                <thead>
                    <tr>
                        <th>Award</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Accepted</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleData[year].map(year => {
                        return <tr>
                            <td>
                                <button className = "yearButton">
                                <u>{year['award-name']}</u>
                                </button>
                            </td>
                            <td>{year['category']}</td>
                            <td>${year['amount']}</td>
                            {year['accepted'] == true ? 
                                <td>
                                    ${year['amount']}
                                </td>:
                                <td>
                                    $0
                                </td>
                            }
                        </tr>
                    })}
                </tbody>
            </Table>
            </div>
        </div>
    )
};

export default FinanceInfo;