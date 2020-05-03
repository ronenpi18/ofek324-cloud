import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from '@essentials/services/config.service';

@NgModule()
export class EssentialsModule
{
    constructor(@Optional() @SkipSelf() parentModule: EssentialsModule)
    {
        if ( parentModule )
        {
            throw new Error('EssentialsModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule : EssentialsModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
