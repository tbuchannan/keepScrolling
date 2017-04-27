// import React from 'react';
// import { Link } from 'react-router';
//
//
// class DynamicLink extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = props.state;
//     this.handleChange = this.handleChange.bind(this);
//     this.validLink = this.validLink.bind(this);
//   }
//
//
//
// handleChange(field){
//   return (e)=>{
//     this.setState({[field]: e.target.value});
//   };
// }
//
//
// validLink(link){
//   if (link.match(/\.\w{2}/) === null) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }
//
// render(){
//   // this logic needs to be fixed as well as the styling
//   // debugger
//   // if (this.validLink(this.state.link_url)){
//   //   return (
//   //     <div className = "dynamic-form-container">
//   //       <form onSubmit={this.props.makePost()}>
//   //         <a href={this.state.link_url} className="dynamic-link-title">{this.state.link_url}</a>
//   //         <input type="text" className="dynamic-title-user-entry" placeholder="Enter a title" onChange={this.handleChange("title")} />
//   //         <input type="text" placeholder="Enter a summary" className="dynamic-summary-user-entry"  onChange={this.handleChange("summary")}/>
//   //         <textarea className="dynamic-description-entry" placeholder="Add a description, if you like" onChange={this.handleChange("description")}/>
//   //         <div className="modal-buttons">
//   //
//   //           <button className="form-close-button" onClick={this.closeForm}>
//   //             <span className="unselected">Close</span>
//   //           </button>
//   //
//   //           <button className="form-post-button" type="submit" disabled={!this.state.link_url}>
//   //             <span className="unselected">Post</span>
//   //           </button>
//   //         </div>
//   //         </form>
//   //     </div>
//   //   );
//   // } else {
//   //     return (
//   //       <div>
//   //         <input type="textarea" className= "dynamic-link-textarea" placeholder="Type or paste a URL" onChange={this.handleChange("link_url")} />
//   //       </div>
//   //     );
//     // }
//   }
// }
//
// export default DynamicLink;
