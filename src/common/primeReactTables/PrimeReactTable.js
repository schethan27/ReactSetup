import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable/';
import {Column} from 'primereact/column';
import * as PostsApiService from '../../services/PostsApiService';


export default class PrimeReactTable extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            loading:true,
            first: 0,
            selectedPage:0,
            rows: 5,
            totalRecords: 0
        };
        this.inputTextEditor = this.inputTextEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
        this.onPage = this.onPage.bind(this);

    }

    componentDidMount() {
        this.getPosts(this.state.rows,this.state.first); 
    }

    getPosts(pageCount,startIndex){
        PostsApiService.getAllPosts()
        .then( result=>{
            console.log(JSON.stringify(result));
            const totalRecords = result.length;
           // const startRow = rows * startIndex;
            const endRow = startIndex + pageCount;
            this.setState({
                posts:result.slice(startIndex, endRow),
                totalRecords: totalRecords,
                first: startIndex,
                last:Math.ceil(totalRecords/ pageCount),
                rows:pageCount,
                selectedPage:startIndex

            });   
            setTimeout(()=>{
                console.log(JSON.stringify(this.state));
            },1000);
        })
        .catch((e)=>{
            console.log(e);
        }).finally(()=>{
            this.setState({
                loading:false
            });
        });
    }
    onPage(event) {
        this.setState({
            rows:event.rows
        });
        this.getPosts(event.rows,event.first);
    }

    render(){
        const columns = []
        if(this.state.totalRecords > 0){
            Object.keys(this.state.posts[0]).map(function(key, id) {
                const columnItem = {
                    "header":key,
                    "field":key
                }
            columns.push(columnItem);
            });
        }
        
        const dynamicColumns = columns.map((col,i) => {
            return <Column  key={i} field={col.field} header={col.header} />;
        });

        return (
            <div className="card mt-2">
                <div className="card-body">
                    <h5 className="card-title">Prime Table Records</h5>       
                    <DataTable  
                        value={this.state.posts}
                        tableClassName="Prime Table" 
                        responsive={true} 
                        editable={true} 
                        paginator={true}
                        paginatorPosition={"both"}
                        alwaysShowPaginator={true}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        rowsPerPageOptions={[5,10,20,30]}
                        totalRecords={this.state.totalRecords}
                        rows={this.state.rows}
                        lazy={true}
                        first={this.state.first} 
                        onPage={this.onPage}
                        last={this.state.last}
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" rows={this.state.rows}
                       >
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );

    }
}
