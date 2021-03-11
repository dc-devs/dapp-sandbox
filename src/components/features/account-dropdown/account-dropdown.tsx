import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { selectMetaMaskWallet } from '../../../redux/slices/metamask-slice';
import utils from '../../../utils';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import { MouseEvent } from 'react';

const { shortenWalletAddress } = utils;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	container: {
		position: 'relative',
		width: '100%',
	},
	popperRoot: {
		width: '100%',
		transform: 'translate3d(44px, 62px, 0px)',
	},
	menuIcon: {
		marginRight: '15px',
	},
	paper: {
		marginRight: theme.spacing(2),
	},
	accountDropdownContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: theme.spacing(3),
		border: `1px solid #eceff1`,
		borderRadius: '12px',
		minHeight: '36px',
		width: '100%',
	},
	signedInDot: {
		height: '10px',
		width: '10px',
		backgroundColor: theme.palette.primary.main,
		borderRadius: '50%',
	},
	walletAdress: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minWidth: '113px',
		color: theme.palette.text.primary,
		margin: '0 5px',
	},
	dropdownArrow: {
		fontSize: '1rem',
		transform: 'rotate(-90deg)',
	},
}));

const AccountDropdown = () => {
	const classes = useStyles();
	const { selectedAddress } = useSelector(selectMetaMaskWallet);
	const shortendWalletAddress = shortenWalletAddress(selectedAddress);
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null) as any;

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	// TODO: FIX ANY
	const handleClose = (event: any) => {
		console.log(event);
		if (
			anchorRef.current &&
			anchorRef.current.contains &&
			anchorRef.current.contains(event.target)
		) {
			return;
		}

		setOpen(false);

		return true;
	};

	// TODO: FIX ANY
	const handleListKeyDown = (event: any) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	};

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open);

	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Button
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
					className={classes.accountDropdownContainer}
				>
					<div className={classes.signedInDot} />
					<Typography className={classes.walletAdress}>
						{shortendWalletAddress}
					</Typography>
					<ArrowBackIosRoundedIcon
						className={classes.dropdownArrow}
					/>
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
					className={classes.popperRoot}
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === 'bottom'
										? 'center top'
										: 'center bottom',
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										<MenuItem onClick={handleClose}>
											<SettingsOutlinedIcon
												className={classes.menuIcon}
											/>
											<Typography>Settings</Typography>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<FileCopyOutlinedIcon
												className={classes.menuIcon}
											/>
											<Typography>
												Copy Address
											</Typography>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<ExitToAppRoundedIcon
												className={classes.menuIcon}
											/>
											<Typography>Sign Out</Typography>
										</MenuItem>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
};

export default AccountDropdown;
