/**
 * Created by matvij on 26.07.17.
 */
/**
 * Created by matvij on 24.07.17.
 */
import React from 'react';
import Element from '../../PropertyValues';

export class PlaybackProperties extends React.Component {
    constructor(props){
        super(props);
        this.node = Element[this.props.node.nodeType];
        this.state={name:'', type:this.node.files[0].values[0]};
        this.files = this.props.node.extras[this.props.node.nodeType]['files'];
        this.typeChanged = this.typeChanged.bind(this);
        this.nameChanged = this.nameChanged.bind(this);
        this.addMedia = this.addMedia.bind(this);
        this.deleteMedia = this.deleteMedia.bind(this);
    }
    // componentWillReceiveProps(nextProps) {
    //     this.files = nextProps.node.extras[nextProps.node.nodeType]['files'];
    // }
    typeChanged(e){
        this.setState({
            type: e.target.value
        });
    }
    nameChanged(e){
        this.setState({
            name: e.target.value
        });
    }
    addMedia(){
        let file = {name:this.state.name, type:this.state.type};
        this.files.push(file);
        this.setState({name:'', type: this.node.files[0].values[0]});
    }
    deleteMedia(item){
        let index = this.files.indexOf(item);
        this.files.splice(index,1);
        this.forceUpdate();
    }
    getParameters(){
        return(
            <div>
                <label>Type</label>
                <select value={this.state.type} onChange={(e)=>{this.typeChanged(e)}}>
                    {this.node.files[0].values.map( (i, index) => {
                        return <option key={index} value={i}>{i}</option>;
                    })}
                </select>
                <label>Name</label>
                <input type="text" value={ this.state.name} onInput={(e)=>{this.nameChanged(e)}}></input>
                <button onClick={this.addMedia}>push</button>
                <ul>
                    {this.files.map((i)=> {
                            return (
                                <li>
                                    {i.name + '\t' + i.type}
                                    <button onClick={()=>{this.deleteMedia(i)}}>delete</button>
                                </li>
                            );
                        }
                    )}
                </ul>
            </div>
        );
    }
    render() {
        if(!this.props.node||!this.props.node.nodeType)return;
        return this.getParameters();
    }
}
