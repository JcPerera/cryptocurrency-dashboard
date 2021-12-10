import {useHistory} from "react-router-dom";
import {Table} from "antd";
import Container from "../components/Container";

const CurrencyList = (props) => {
    const history = useHistory();
    const {response} = props
    const columns = [
        {
            title: "Id",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
                multiple: 3,
            },
        },
        {
            title: "Symbol",
            dataIndex: "symbol",
            sorter: {
                compare: (a, b) => a.symbol.localeCompare(b.symbol),
                multiple: 2,
            },
        },
    ];

    return (
        <div>
            <Container>
                <Table
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                history.push(`/home/currency/${record.id}`);
                            }, // click row
                        };
                    }}
                    columns={columns}
                    dataSource={response}
                    pagination={{defaultPageSize: 10}}
                    loading={props.loading}
                />
            </Container>
        </div>
    );
};

export default CurrencyList;
