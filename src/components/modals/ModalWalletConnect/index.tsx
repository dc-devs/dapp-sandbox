import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import ModalBase from '../ModalBase';

interface Props {
	isOpen: boolean;
}

const useStyles = makeStyles((theme) => ({
	modalRoot: {
		borderRadius: '12px',
	},
	dialogContentRoot: {
		width: '800px',
		height: '395px',
		padding: theme.spacing(2),
	},
}));

const ModalWalletConnect = ({ isOpen }: Props) => {
	const classes = useStyles();

	return (
		<ModalBase isOpen={isOpen} className={classes.modalRoot}>
			<DialogContent className={classes.dialogContentRoot}>
				Add some content Here
			</DialogContent>
		</ModalBase>
	);
};

export default ModalWalletConnect;
