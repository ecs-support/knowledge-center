import dash
from dash.dependencies import Input, Output
import dash_table
import pandas as pd
import io

col = ['CustomsTariff','StatisticsCode','Type','Department','ThaiDescription','EnglishDescription','StartDate']

df = pd.read_excel('permission_report.xlsx', 'Sheet1')
df['พิกัดศุลกากร'] = df['พิกัดศุลกากร'].map('{:08d}'.format)
df['รหัสสถิติ'] = df['รหัสสถิติ'].map('{:03d}'.format)
df.columns = col


df['index'] = range(1, len(df) + 1)

app = dash.Dash(__name__)

PAGE_SIZE = 25

app.layout = dash_table.DataTable(
    id='datatable-paging',
    columns=[
        {"name": i, "id": i} for i in sorted(df.columns)
    ],
    page_current=0,
    page_size=PAGE_SIZE,
    page_action='custom'
)


@app.callback(
    Output('datatable-paging', 'data'),
    [Input('datatable-paging', "page_current"),
     Input('datatable-paging', "page_size")])
def update_table(page_current,page_size):
    return df.iloc[
        page_current*page_size:(page_current+ 1)*page_size
    ].to_dict('records')


if __name__ == '__main__':
    app.run_server(debug=False)