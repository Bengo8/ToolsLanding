import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Link,
    Route,
} from "react-router-dom";

import '../assets/styles.css';
import ToolsService from '../services/ToolsService.js'
import UsersService from '../services/UsersService'

import modules from '../modules';

const _toolsSrvc = new ToolsService();
const _usersService = new UsersService();
export const ToolsComponent = () => {
    const toolsList = _toolsSrvc.getTools();

    return (
        <>
            <div className="row" style={{ margin: 15 }}>
                {
                    modules.filter(module => module.routeProps.type === 'toolModule').map((toolModule) =>
                        <>
                            {
                                toolsList.filter(tool => tool.toolModuleName === toolModule.name).map((tool) =>
                                    <div key={tool.toolModuleName} className="col-sm-6" style={{ marginBottom: 15 }}>
                                        <div className="card" style={{
                                            background: `linear-gradient(190deg,rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${tool.img})`,
                                            backgroundPosition: 'center',
                                            cursor: 'pointer'
                                        }}>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {tool.title}
                                                </h5>
                                                <p className="card-text">
                                                    <img src={"./../"+ tool.toolIconImg} style={{height:65, width:65, marginTop: -53}} />
                                                </p>
                                                <Link to={toolModule.routeProps.path}><a className="btn btn-dark">Abrir Herramienta</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                    )
                }
                {/* {
                     toolsList.map((tool) =>
                         <div className="col-sm-6" style={{ marginBottom: 15 }}>
                             <div onClick={() => window.location = tool.link} className="card" style={{
                                 background: `linear-gradient(190deg,rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${tool.img})`,
                                 backgroundPosition: 'center',
                                 cursor: 'pointer'
                             }}>
                                 <div className="card-body">
                                     <h5 className="card-title">
                                         {tool.title}
                                     </h5>
                                     <a href={tool.link} className="btn btn-dark">Ir a la web</a>
                                 </div>
                             </div>
                         </div>
                     )
                 } */}

                {/* {toolsList.map((tool) => (
                    <div className="col-sm-6" style={{ marginBottom: 15 }}>
                        <div onClick={() => window.location = tool.link} className="card" style={{
                            background: `linear-gradient(190deg,rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${tool.img})`,
                            backgroundPosition: 'center',
                            cursor: 'pointer'
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {tool.title}
                                </h5>
                                <a href={tool.link} className="btn btn-dark">Ir a la web</a>
                            </div>
                        </div>
                    </div>
                ))} */}
            </div>
        </>
    )
}
