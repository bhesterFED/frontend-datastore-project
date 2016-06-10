/*
    the array index address for each content block is commented
    above each data entry. The index address can be copied 
    and used that to assign content to the innerHTML of a DOM element
    in contentInjection.v2.js
*/

var db = {
    tables : {
        headings: [
            //db.tables.headings[0]
            'Safety Consideration<sup>1</sup><br> Warning:',
            //db.tables.headings[1]
            'Safety Consideration<sup>1</sup>'
        ],

        boxwarnings: [
            //db.tables.boxwarnings[0]
            'Thyroid hormones, including Synthroid, either<br>'+
            'alone or with other therapeutic agents, should <br>'+
            'not be used for the treatment of obesity or for <br>'+
            'weight loss. In euthyroid patients, doses within <br>'+
            'the range of daily hormonal requirements are <br>'+
            'ineffective for weight reduction. Larger doses <br>'+
            'may produce serious or even life-threatening <br>'+
            'manifestations of toxicity, particularly when <br>'+
            'given in association with sympathomimetic <br>'+
            'amines such as those used for their anorectic <br>'+
            'effects.',
            
            //db.tables.boxwarnings[1]
            '<strong>The Food and Drug Administration has <br>'+
            'determined that certain levothyroxine products <br>'+
            'are therapeutically equivalent.</strong> Drugs that are <br>'+
            'classified as therapeutically equivalent can be <br>'+
            'substituted with the full expectation that the <br>'+
            'substituted product will produce the same <br>'+
            'clinical effect and safety profile as the reference <br>'+
            'product.<sup>1</sup>',

            //db.tables.boxwarnings[2]
            'Please tap above for Important Safety <br>'+
            'Information, including BOXED WARNING <br>'+
            'regarding inappropriate treatment for obesity.',

            //db.tables.boxwarnings[3]
            '<strong>The Food and Drug Administration has <br>'+
            'determined that certain levothyroxine products <br>'+
            'are therapeutically equivalent.</strong> Drugs that are <br>'+
            'classified as therapeutically equivalent can be <br>'+
            'substituted with the full expectation that the <br>'+
            'substituted product will produce the same <br>'+
            'clinical effect and safety profile as the reference <br>'+
            'product.<sup>1</sup>'
        ],

        safetylists: [
            //db.tables.safetylists[0]
            '<li><span>'+
            'Many drugs affect thyroid hormone <br>'+
            'pharmacokinetics and metabolism, and thyroid <br>'+
            'hormones and thyroid status have varied <br>'+
            'effects on the pharmacokinetics and actions of <br>'+
            'other drugs. Levothyroxine increases the <br>'+
            'response to oral anticoagulant therapy and <br>'+
            'may reduce the therapeutic effects of digitalis <br>'+
            'glycosides. Prescribers should consult <br>'+
            'appropriate reference sources for <br>'+
            'drug-thyroidal axis interactions.'+
            '</span></li>',

            //db.tables.safetylists[1]
            '<li><span>'+
            'Levothyroxine has a narrow therapeutic <br>'+
            'index. Regardless of the indication for use, <br>'+
            'careful dosage titration is necessary to avoid <br>'+
            'the consequences of over- or <br>'+
            'under-treatment.'+
            '</span></li>',

            //db.tables.safetylists[2]
            '<li><span>'+
            'Patients with coronary artery disease who are <br>'+
            'receiving levothyroxine therapy should be <br>'+
            'monitored closely during surgical <br>'+
            'procedures, since the possibility of <br>'+
            'precipitating cardiac arrhythmias may be <br>'+
            'greater in those treated with levothyroxine.'+
            '</span></li>',

            //db.tables.safetylists[3]
            '<li><span>'+
            'Levothyroxine is contraindicated in patients <br>'+
            'with untreated subclinical or overt <br>'+
            'thyrotoxicosis, acute myocardial infarction, <br>'+
            'uncorrected adrenal insufficiency, or with <br>'+
            'hypersensitivity to any of the inactive tablet <br>'+
            'ingredients.'+
            '</span></li>',

            //db.tables.safetylists[4]
            '<li><span>'+
            'In patients with nontoxic diffuse goiter or <br>'+
            'nodular thyroid disease, particularly the elderly <br>'+
            'or those with underlying cardiovascular<br>'+
            'disease, levothyroxine sodium therapy is <br>'+
            'contraindicated if the serum TSH level is <br>'+
            'already suppressed due to the risk of <br>'+
            'precipitating overt thyrotoxicosis. If the serum <br>'+
            'TSH level is not suppressed, levothyroxine <br>'+
            'should be used with caution in conjunction <br>'+
            'with careful monitoring of thyroid function for <br>'+
            'evidence of hyperthyroidism and clinical <br>'+
            'monitoring for adverse cardiovascular signs <br>'+
            'and symptoms of hyperthyroidism.'+
            '</span></li>',
        ],

        'refLabels': [
            'label 1',
            'label 2',
            'label 3'
        ],

        'ref Footnotes': [
            //db.tables.references.footnote[0]
            'Synthroid [package insert]. North Chicago, <br>IL: AbbVie Inc.',
            
            // db.tables.references.footnote[1]
            'Data on file, AbbVie Inc., North Chicago, IL',

            // db.tables.references.footnote[2]
            'Delta Marketing Dynamics. DMD <br>'+
            'Synthroid Rx Audit Summary, October 2014.',

            //db.tables.references.footnote[3]
            ' US Food and Drug Administration. <br>'+
            'Approved drug products with therapeutic  <br>'+
            'equivalence evaluations. 35th ed. http://www.fda.gov/downloads/ <br>'+
            'Drugs/DevelopmentApprovalProcess/UCM071436.pdf.<br>'+
            'Published 2015. Accessed January 25, 2016.',
            
            // db.tables.references.footnote[4]
            'BusinessOne. Accessed January 2016.'
        ],

        references : {
            labels: [
                //db.tables.references.labels[0]
                '<strong>Reference: 1.</strong> ',

                // db.tables.references.labels[1]
                '<strong>References: 1.</strong> ',

                // db.tables.references.labels[3]
                ' <strong>2. </strong> ',
            ],

            footnote: [
                //db.tables.references.footnote[0]
                'Synthroid [package insert]. North Chicago, <br>IL: AbbVie Inc.',
                
                // db.tables.references.footnote[1]
                'Data on file, AbbVie Inc., North Chicago, IL',

                // db.tables.references.footnote[2]
                'Delta Marketing Dynamics. DMD <br>'+
                'Synthroid Rx Audit Summary, October 2014.',

                //db.tables.references.footnote[3]
                ' US Food and Drug Administration. <br>'+
                'Approved drug products with therapeutic  <br>'+
                'equivalence evaluations. 35th ed. http://www.fda.gov/downloads/ <br>'+
                'Drugs/DevelopmentApprovalProcess/UCM071436.pdf.<br>'+
                'Published 2015. Accessed January 25, 2016.',
                
                // db.tables.references.footnote[4]
                'BusinessOne. Accessed January 2016.'
            ]
        },

        misc: [
            // db.tables.misc[0]
            '<em>Tablets shown not actual size and may not represent <br>actual color.</em>',

            // db.tables.misc[1]
            '<sup>a</sup>Covered is defined as patient has access and plan <br>'+
            'coverage of product at any formulary tier, and product is <br>'+
            'not NDC blocked. Step edits, prior authorization, and <br>'+
            'other restrictions apply.',

            // db.tables.misc[2]
            '<sup>b</sup>Health plan or PBM blinded for contractual reasons.',

            // db.tables.misc[3]
            '<sup>c</sup>Not covered on Preferred Drug formulary.'
        ],
    }
};
