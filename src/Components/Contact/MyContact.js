import React from 'react';
import './Contact.css';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import lamido from '../Layouts/lamido.jpg';

class MyContact extends React.Component {
	render() {
		return (
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Lamido Tijjani</h2>
						<img src={lamido} alt="Lamido" />
						<p>dfgksgdfgfgiiiuwfugfuiwegii</p>
					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr />
						<div className="contact-list">
							<List>
								<ListItem>
									<ListItemContent>
										<i className="fa fa-phone" />
										+2348067446476
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent>
										<i className="fa fa-skype" />
										kinglamido@hotmail.com
									</ListItemContent>
								</ListItem>
								<ListItem>
									<ListItemContent>
										<i className="fa fa-envelope" />kinglamido@gmail.com
									</ListItemContent>
								</ListItem>
							</List>
						</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default MyContact;
