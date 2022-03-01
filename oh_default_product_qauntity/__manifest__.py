# Copyright 2022 Odoo Helper
# See LICENSE file for full copyright and licensing details.
#
##############################################################################
{
    'name': 'Default Product Qauntity With Stepping',
    'version': '15.0.1',
    'category': 'Website',
    'summary': 'Default Product Qauntity With Stepping',
    'description': """
        Default Product Qauntity With Stepping
    """,
    'sequence': 1,
    'author': 'Odoo Helper',
    'depends': ['website_sale'],
    'data': [
        'views/product_view.xml',
        'views/template.xml'
    ],
    'assets': {
        'web.assets_frontend': [
            'oh_default_product_qauntity/static/src/custom.js',
        ],
    },
    'live_test_url': 'https://youtu.be/bl93ORfiOwQ',
    'images': ['images/OdooHelper.jpeg'],
    'price': 22.43,
    'currency': 'USD',
    'installable': True,
    'auto_install': False,
    'application': True,
}
