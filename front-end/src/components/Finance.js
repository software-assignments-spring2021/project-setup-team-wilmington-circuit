import React, {useState, useEffect } from 'react';
import '../main.css';
import { Button, ButtonToolbar, Dropdown, DropdownButton, ButtonGroup, Collapse, Table } from 'react-bootstrap';
import getTestData from '../testData';
import "./styles/Finance.css";


const FinanceInfo = (props) => {
    const [year, setYear] = React.useState(1);
    const handle20_21Click= () => setYear(1);
    const handle19_20Click = () => setYear(0);
    const [awards, showAwards] = React.useState(false);
    const handleAwardsClick = () => showAwards(!awards);	

    const [financeData, setFinanceData] = React.useState([]);
    useEffect(()=>{
        getTestData.getFinancialData().then(res => {
            setFinanceData(res);
        }
        )
    }, [])

    return (
        <div>
            {financeData ? (
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
                        {financeData.info ? (
                            financeData.info[year].awards.map(award => {
                                return <tr>
                                    <td>
                                        <button className = "yearButton">
                                        <u>{award['award_name']}</u>
                                        </button>
                                    </td>
                                    <td>{award['category']}</td>
                                    <td>${award['amount']}</td>
                                    {award['accepted'] == true ? 
                                        <td>
                                            ${award['amount']}
                                        </td>:
                                        <td>
                                            $0
                                        </td>
                                    }
                                </tr>
                            })):(
                                <p>
                                    Loading...
                                </p>
                            )
                        }
                    </tbody>
                </Table>
                </div>
            </div>
        ): (
            <div>
                Loading...
                </div>
         )}
        </div>
        
        
    )
};

export default FinanceInfo;