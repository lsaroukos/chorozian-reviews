<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit057220906d24c49bf49ec2790bc6a64c
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit057220906d24c49bf49ec2790bc6a64c', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit057220906d24c49bf49ec2790bc6a64c', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit057220906d24c49bf49ec2790bc6a64c::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
