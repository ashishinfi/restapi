INSERT INTO [dbo].[rois]
    ( 
        [projectname],
        [projectDescription],
        [cpc],
        [cpi],
        [cpl],
        [cps],
        [uac],
        [cv],
        [startDate],
        [endDate]
        
    )
VALUES 
    (   
      
        @projectname,
        @projectDescription,
        @cpc,
        @cpi,
        @cpl,
        @cps,
        @uac,
        @cv,
        @startDate,
        @endDate
        
    )

SELECT SCOPE_IDENTITY() AS roiId