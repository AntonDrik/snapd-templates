import React from "react";
import CardContent from '@material-ui/core/CardContent';
import {ServiceCard} from '../shared/components/ServiceCard/component';
import {ServiceCardHeader} from '../shared/components/ServiceCard/components/Header/component';
import {ICameraServiceCardTemplateProps} from './types/ITemplateProps';
import RefreshIcon from '@material-ui/icons/Refresh';
import {CircularIconButton} from '../shared/components/CircularIconButton/component';
import {CameraServiceForm} from './components/Form/component';


export function CameraServiceCardTemplate(
    {loading, serviceStatus, form, onReloadBtn, onSubmitForm}: ICameraServiceCardTemplateProps
): JSX.Element {

    return <>
        {
            <ServiceCard width="100%">

                <ServiceCardHeader
                    title="Camera Service"
                    status={serviceStatus}
                    reloadBtn={
                        <CircularIconButton
                            spinnerSize={35}
                            loading={loading}
                            disabled={loading}
                            onClick={onReloadBtn}
                        >
                            <RefreshIcon color="secondary"/>
                        </CircularIconButton>
                    }
                />

                <CardContent>
                    <CameraServiceForm
                        loading={loading}
                        form={form}
                        onSubmit={onSubmitForm}
                    />
                </CardContent>
            </ServiceCard>
        }
    </>
}
