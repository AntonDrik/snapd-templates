import React from "react";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import useStyles from './styles';
import {IServiceCardHeaderProps} from './types/IServiceCardHeaderProps';
import {ServiceStatusCode} from '../../../../types/Service';

function _ServiceCardHeader({title, status, reloadBtn}: IServiceCardHeaderProps) {

    const classes = useStyles();

    return <>
        <CardHeader
            className={classes.cardHeader}
            classes={{
                action: classes.action
            }}
            title={title}
            subheader={status.caption || ''}
            avatar={
                <FiberManualRecordIcon
                    className={clsx({
                        [classes.successStatus]: status.code === ServiceStatusCode.INITIALIZED,
                        [classes.errorStatus]: status.code === ServiceStatusCode.ERROR,
                        [classes.notInitStatus]: status.code === ServiceStatusCode.NOT_INITIALIZED,
                        [classes.warningStatus]: status.code === ServiceStatusCode.WARNING
                    })}
                />
            }
            action={status.code === ServiceStatusCode.ERROR ? reloadBtn : null}
        >
        </CardHeader>
    </>
}

export const ServiceCardHeader = React.memo(_ServiceCardHeader);
