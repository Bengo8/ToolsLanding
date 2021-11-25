import React from 'react'
import ToolsService from '../services/ToolsService.js'
import UsersService from '../services/UsersService'

const _toolsSrvc = new ToolsService();
const _usersService = new UsersService();
export const ToolsComponent = () => {
    const toolsList = _toolsSrvc.getTools();

    return (
        <>
            <div className="row" style={{ margin: 15 }}>
                {toolsList.map((tool) => (
                    <div className="col-sm-6" style={{ marginBottom: 15 }}>
                        <div className="card" style={{
                            background: `linear-gradient(190deg,rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${tool.img})`,
                            backgroundPosition: 'center',
                        }}>
                            <div className="card-body" style={{
                                opacity: 1,
                            }}>
                                <h5 className="card-title" style={{
                                    fontSize: 30,
                                    fontWeight: 'bolder',
                                    textTransform: 'uppercase'
                                }}>
                                    {tool.title}
                                </h5>
                                <p className="card-text" style={{
                                    fontSize: 18,
                                    fontWeight: 'bolder',
                                }}>
                                    {tool.subTitle}
                                </p>
                                <a href={tool.link} className="btn btn-primary">Ir a la web</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
