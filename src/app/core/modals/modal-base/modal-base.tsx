import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
	isOpen: boolean;
	children: JSX.Element;
	className?: string;
}

const useStyles = makeStyles(() => ({
	dialogRoot: {},
	paper: {
		borderRadius: '12px',
	},
}));

const ModalBase = ({ isOpen, children, className }: Props) => {
	const classes = useStyles();

	return (
		<Dialog
			open={isOpen}
			maxWidth="xl"
			classes={{
				paper: classes.paper,
			}}
			className={`${classes.dialogRoot} ${className}`}
		>
			{children}
		</Dialog>
	);
};

export default ModalBase;
