import {useHistory} from "react-router-dom";
import {Alert, Table} from "antd";
import Container from "../components/Container";

const CurrencyList = (props) => {
    const history = useHistory();
    const {response, loading, error} = props
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

    const errorBanner = error && <Container><Alert message="Error"
                                                   description={error.data.error}
                                                   type="error"
                                                   showIcon/> </Container>

    return (
        error ? errorBanner : <Container>
            <Table
                onRow={(record) => {
                    return {
                        onClick: () => {
                            history.push(`/home/${record.id}`);
                        }, // click row
                    };
                }}
                columns={columns}
                dataSource={response}
                pagination={{defaultPageSize: 10}}
                loading={loading}
            />
        </Container>
    );
};

export default CurrencyList;
